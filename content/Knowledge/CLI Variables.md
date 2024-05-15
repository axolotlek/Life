---
language:
  - en
tags:
  - cli
  - linux
  - it
  - bash
type:
  - permanent
aliases:
  - variable
  - env
  - environment
  - var
---
# CLI Variables

## Temporary
simple as fuck:
```bash
VAR='KEY'
```
then use $VAR in command
```bash
curl $VAR
```

## Permanent
## Per-user
```bash
nano ~/.profile
```
```~/.profile
#add lines at the bottom of the file:  
     export LD_LIBRARY_PATH=/usr/lib/oracle/11.2/client64/lib
     export ORACLE_HOME=/usr/lib/oracle/11.2/client64
```
