import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseClassic } from './module_a';

const myDatabaseModule = MyDatabaseModule;

myDatabaseModule.add({ name: 'Hannah', age: 3 });
myDatabaseModule.add({ name: 'Nick', age: 6 });
myDatabaseModule.add({ name: 'Nega', age: 9 });
myDatabaseModule.show();

console.log(myDatabaseModule === myDatabaseClassic);
