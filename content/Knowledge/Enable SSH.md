---
language:
  - en
tags:
  - linux
  - it
  - ssh
type:
  - permanent
---
# Enable SSH

## Enable SSH for a specific user
Create a `.ssh` directory in the new user’s home directory.
```bash
mkdir /home/user/.ssh
```
then copy existing [key](file:///home/marseille/.ssh/id_rsa.pub) to authorized_keys
```bash
echo "key" > /home/user/.ssh/authorized_keys
```
