USE heroku_993345239501248;
GO
BACKUP DATABASE heroku_993345239501248
TO DISK = 'c:\tmp\chip-spree-db.bak'
   WITH FORMAT,
      MEDIANAME = 'SQLServerBackups',
      NAME = 'Full Backup of chip-spree-heroku-db';
GO