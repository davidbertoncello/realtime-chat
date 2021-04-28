import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn  } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("connections")
class Connection {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    socket_id: string;

    @Column()
    user_id: string;
    
    @JoinColumn({ name: "user_id"})
    @ManyToOne( () => User ) // Many messages To One User
    user: User;

    @CreateDateColumn()
    created_at: string;

    @CreateDateColumn()
    updated_at: string;


    constructor(){

        if(!this.id){
            this.id = uuid();
        }

    }

}

export { Connection }