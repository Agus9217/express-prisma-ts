import { Post } from "@prisma/client";

export class UserEntity {
  constructor(
    private id: number,
    private email: string,
    private name: string,
    private posts?: Post[]
  ) {}

  public static fromObject(object: { [key: string]: any }): UserEntity {
    const { id, email, name, posts } = object;
    if (!email) throw "Please insert an email address";
    return new UserEntity(id, email, name, posts);
  }
}
