export class UserService {
  activeUsers = ["Max", "Anna"];
  inacitveUsers = ["Chris", "Manu"];

  setToActive(id: number) {
    this.activeUsers.push(this.inacitveUsers[id]);
    this.inacitveUsers.splice(id, 1);
  }

  setToInactive(id: number) {
    this.inacitveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
}
