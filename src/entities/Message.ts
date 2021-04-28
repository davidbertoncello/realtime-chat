import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn  } from "typeorm" 
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    user_id: string;
    
    @JoinColumn({ name: "user_id"})
    @ManyToOne( () => User ) // Many messages To One User
    user: User;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: string;


    constructor(){

        if(!this.id){
            this.id = uuid();
        }

    }

}

export { Message }