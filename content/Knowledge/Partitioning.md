---
language:
  - en
tags:
  - btrfs
  - fstab
  - linux
  - cli
type:
  - permanent
aliases:
  - разделы
  - partitions
  - disk
  - btrfs
---
# Partitioning
# My Scheme
### Structure
```partitioning
/partitions - dir with root of each partitions (subvolid=5 if btrfs)
```
### Btrfs Options
```options
subvol=/@,noatime,space_cache=v2,compress-force=zstd:5,discard=async
```
### SWAP File
```swap location
/partitions/home/swapfile
```

## SWAP Creation
```bash
SWAP_SIZE='16G'

cd /partitions/home
sudo truncate -s 0 swapfile
sudo chattr +C swapfile
sudo fallocate -l $SWAP_SIZE swapfile
sudo chmod 0600 swapfile
sudo mkswap swapfile
sudo swapon swapfile
```
