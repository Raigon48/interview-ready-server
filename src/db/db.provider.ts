import mongoose, { Mongoose } from 'mongoose';

export class DBProvider {
    private static connection: Mongoose;

    private constructor() {}

    private static async connect(connectionString: string) {
        this.setEvents();
        try {
            const connection: Mongoose = await mongoose.connect(connectionString);
            this.connection = connection;
        } catch(error) {
            throw error;
        }
    }

    private static setEvents() {
        mongoose.connection.on('connected', () => {
            console.log('Connected to DB');
        });
        mongoose.connection.on('disconnected', () => {
            console.log("Disconnected from DB");
        });
        mongoose.connection.on('error', (error) => {
            console.log(error);
        });
    }

    public static getConnection(connectionString: string) {
        if(!this.connection) {
            this.connect(connectionString);
        }
        return this.connection;
    }
}