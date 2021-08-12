import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTransactionlog1628770371289 implements MigrationInterface {
    name = 'AddTransactionlog1628770371289';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "transaction_log" ("id" serial NOT NULL, "certificateId" integer NOT NULL, "transactionHash" text NOT NULL, "transactionType" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_c31d1e77795e3bd9d5f6399f988" PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transaction_log"`);
    }
}
