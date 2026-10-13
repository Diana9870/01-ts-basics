function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}, Age: ${age}, Email: ${email ?? "not provided"}`);
}

printUserInfo("Alex", 25);
printUserInfo("Maria", 30, "maria@example.com");
