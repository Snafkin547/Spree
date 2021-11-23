--To Restore an Entire Database from a Full database backup (a Complete Restore):
USE heroku_993345239501248;
GO
RESTORE DATABASE heroku_993345239501248
FROM DISK = 'c:\tmp\chip-spree-db.bak' WITH NORECOVERY
GO