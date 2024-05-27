---
language:
  - en
tags:
  - it
  - linux
  - os
  - cli
type:
  - permanent

---
# User Creation
```bash
useradd user
```
then we need to setup password:
```bash
passwd user
```
also we can choose custom directory for our user:
```bash
usermod -d /home/user -m user
```
last step (optional) to add our user to sudo group:
```bash
usermod -aG sudo newuser
```

## Optional Steps
[[Enable SSH#Enable SSH for a specific user]]
