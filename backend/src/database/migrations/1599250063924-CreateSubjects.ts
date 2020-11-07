import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateSubjects1599250063924 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'subjects',
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
            name: 'course',
            type: 'varchar',
          },
          {
            name: 'id_employee',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'subjects',
      new TableForeignKey({
        name: 'subjectEmployee',
        columnNames: ['id_employee'],
        referencedColumnNames: ['id'],
        referencedTableName: 'employees',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('subjects', 'subjectEmployee');
    await queryRunner.dropTable('subjects');
  }
}
