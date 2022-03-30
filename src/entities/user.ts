import { Entity, PrimaryGeneratedColumn, Column ,BaseEntity,OneToMany } from "typeorm"
import { Post } from './post'
import{Comment} from './comment'
@Entity("user")
    
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @OneToMany(
        () => Post,
        post=> post.users
    )
        post:Post
        
    @Column()
    lastName: string

    @OneToMany(
        () => Comment,
        post=> post.users
    )
        comment:Comment
}

