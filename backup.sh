#!/bin/bash

# Database backup script

# Load environment variables
source .env

# Backup directory
BACKUP_DIR="backups"
mkdir -p $BACKUP_DIR

# Timestamp
TIMESTAMP=$(date +"%F")

# Backup file name
BACKUP_FILE="$BACKUP_DIR/db_backup_$TIMESTAMP.sql"

# Perform the backup
pg_dump $DATABASE_URL > $BACKUP_FILE

# Check if the backup was successful
if [ $? -eq 0 ]; then
  echo "Backup successful: $BACKUP_FILE"
else
  echo "Backup failed"
  exit 1
fi
