export class ListingModel {
	public id: number;
	public name: string;
	public address: string;

	constructor(name: string, address: string) {
		this.id = Date.now();
		this.name = name;
		this.address = address;
	}
}