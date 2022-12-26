import { IUser } from "../data/data.js"
import { isObject } from "./isObject.js"

export const hasPropertiesObj = (obj: IUser) => {
	const trueKeys = ['username', 'age', 'hobbies']
	if (isObject(obj)) {
		return trueKeys.every((el) => obj.hasOwnProperty(el))
	}
	return false
}