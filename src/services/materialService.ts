declare var M

export class MaterialToastService {
	static toast(message) {
		M.toast({ html: message });
	 }
 }
