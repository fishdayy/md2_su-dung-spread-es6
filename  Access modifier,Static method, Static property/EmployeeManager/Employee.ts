export class Employee {
    public firstName: string;
    public lastName: string;
    public birthday: string;
    public address: string;
    public jobPosition: string;

    constructor(firstName?: string, lastName?: string, birthday?: string, address?: string, jobPosition?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.address = address;
        this.jobPosition = jobPosition;
    }


}