import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;

myDatabaseClassic.add({ name: 'Leo', age: 20 });
myDatabaseClassic.add({ name: 'Zabotto', age: 20 });
myDatabaseClassic.add({ name: 'Luke', age: 1 });
myDatabaseClassic.show();

export { myDatabaseClassic };
