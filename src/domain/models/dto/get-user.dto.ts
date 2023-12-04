export class UserEntityDto {
  constructor(private name: string, private email: string) {}

  static create(props: { [key: string]: any }): UserEntityDto {
    const { name, email } = props;

    return new UserEntityDto(name, email);
  }
}
