import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateEmployees1599247912037
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employees',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'date_birth',
            type: 'timestamp',
          },
          {
            name: 'cnh',
            type: 'varchar',
          },
          {
            name: 'position',
            type: 'varchar',
          },
          {
            name: 'isProfessor',
            type: 'int',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees');
  }
}
