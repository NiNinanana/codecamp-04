import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity() // @ : 데코레이터
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;
  @Column({ type: "text" })
  writer!: string;
  @Column({ type: "text" })
  title!: string;
  @Column({ type: "integer" })
  age!: number;
  @Column({ type: "timestamp", default: null, nullable: true }) // nullable: 빈칸을 허용할 것인가
  deletedAt?: Date;
}
