export class Client {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;

  constructor()
  constructor(id?: number, firstname?: string, lastname?: string, email?: string) {
    this.id = id;
    this.firstName = firstname;
    this.lastName = lastname;
    this.emailId = email;
  }
}
