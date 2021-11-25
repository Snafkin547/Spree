--To Restore an Entire Database from a Full database backup (a Complete Restore):

-- Prod Database
USE heroku_993345239501248;
GO
RESTORE DATABASE heroku_993345239501248
FROM DISK = 'c:\tmp\chip-spree-prod-db.bak' WITH NORECOVERY
GO

-- Test Database
USE heroku_439b39a3aae2b79;
GO
RESTORE DATABASE heroku_439b39a3aae2b79
FROM DISK = 'c:\tmp\chip-spree-test-db.bak' WITH NORECOVERY
GO