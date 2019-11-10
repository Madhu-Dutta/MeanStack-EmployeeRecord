/* Employee model class */
/* No direct way to create a model class in ang, so create regular class and --type=model */
export class Employee {
    _id: String;
    name: String;
    position: String;
    office: String;
    salary: Number;
}
