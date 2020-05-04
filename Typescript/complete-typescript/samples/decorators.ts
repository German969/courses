enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const loggingLevel = LoggingLevel.DEBUG;

function LogMethod(level: LoggingLevel): Function {
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        const originalFunction: Function = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (level <= loggingLevel) {
                console.log(">> " + propertyKey + " " + JSON.stringify(args));
            }

            originalFunction.apply(this, args);
        };
    }
}

class Database {
    name = 'CTCDB';

    @LogMethod(LoggingLevel.DEBUG)
    saveData(data:any) {
        console.log(`saving ${JSON.stringify(data)} in ${this.name}`);
    }
}

const db = new Database();

db.saveData({message: 'Hello!'});