import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterTableStudentsSubjects1603996283829
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'studentsSubjects',
      new TableColumn({
        name: 'n1',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'studentsSubjects',
      new TableColumn({
        name: 'n2',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'studentsSubjects',
      new TableColumn({
        name: 'average',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'studentsSubjects',
      new TableColumn({
        name: 'frequency',
        type: 'int',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'studentsSubjects',
      new TableColumn({
        name: 'quantity_given_classes',
        type: 'int',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'studentsSubjects',
      new TableColumn({
        name: 'status',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('studentsSubjects', 'status');
    await queryRunner.dropColumn('studentsSubjects', 'quantity_given_classes');
    await queryRunner.dropColumn('studentsSubjects', 'frequency');
    await queryRunner.dropColumn('studentsSubjects', 'average');
    await queryRunner.dropColumn('studentsSubjects', 'n2');
    await queryRunner.dropColumn('studentsSubjects', 'n1');
  }
}
