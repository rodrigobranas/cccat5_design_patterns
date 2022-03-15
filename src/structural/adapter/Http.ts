export default interface Http {
	route (method: string, url: string, callback: any): Promise<any>;
	listen (port: number): Promise<void>;
}
