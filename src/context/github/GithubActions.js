import axios from 'axios'

const GITHUB_URL = import.meta.env.VITE_GITHUB_API
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN_API

// Create axios instance
const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    }
})

// Search users
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}



// Get user and  repos
export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?sort=created&per_page=10`)
    ])

    return { user: user.data, repos: repos.data }

}