-- Prod Database
USE heroku_993345239501248;
GO
BACKUP DATABASE heroku_993345239501248
TO DISK = 'c:\tmp\chip-spree-prod-db.bak'
   WITH FORMAT,
      MEDIANAME = 'SQLServerBackups',
      NAME = 'Full Backup of chip-spree-heroku-prod-db';
GO

-- Test Database
USE heroku_439b39a3aae2b79;
GO
BACKUP DATABASE heroku_439b39a3aae2b79
TO DISK = 'c:\tmp\chip-spree-test-db.bak'
   WITH FORMAT,
      MEDIANAME = 'SQLServerBackups',
      NAME = 'Full Backup of chip-spree-heroku-test-db';
GO