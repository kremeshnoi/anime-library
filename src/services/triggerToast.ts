declare const M

export class TriggerToast {
	static toast(message) {
		M.toast({ html: message });
	 }
 }