function registerOrmModel(model: Function) {
    console.log("registering ORM models ", model);
}

function Entity(tableName:string) {
    return (target: Function) => {
        registerOrmModel(target);
    }
}

function Column(columName:string) {
    return (target: any, propertyKey: string) => {
        console.log(propertyKey)
    }
}

@Entity("TODOS")
class Todo {

    @Column("DESCR")
    description:string;
    done = false;
}