import Vue from 'vue'
import qs from 'qs'

const config = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}

export default {
	fetchCommentLists (params) {
		return Vue.axios.get(`/api/comments/list?${qs.stringify(params)}`)
	},
	newComment(params){
		return Vue.axios.post(`/api/comments/new`, qs.stringify(params), config)
	},
	modifyComment({ id, comment }){
		return Vue.axios.request({
			method: 'PUT',
			url: `/api/comments/modify/${id}`,
			data: {comment}
		})
	},
	deleteComment({ id, status }){
		return Vue.axios.request({
			method: 'DELETE',
			url: `/api/comments/delete/${id}`,
			data: {status}
		})
	},
	likeComment({ id, commentType, currentOpinionType, likeType }){
		return Vue.axios.request({
			method: 'PUT',
			url: `/api/comments/opinion/${id}`,
			data: {
				commentType,
				currentOpinionType,
				likeType
			}
		})
	},
	dislikeComment(){

	}
}