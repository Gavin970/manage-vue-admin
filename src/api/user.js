import request from "@/config"

/**
 * Login
 * @param data
 */
export const login = (data) => {
	// console.log(111, data)
	return request.post('/web/api/login', data, {load: true})
}

/**
 * logout
 */
export const logout = () => {
	return request.get('/web/api/logout').then(() => {
		console.log("@@")
	})
}
