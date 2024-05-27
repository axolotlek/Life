---
language:
  - en
tags:
  - ssh
  - linux
  - cli
type:
  - permanent

---
# Proxy through SSH

## SOCKS
```bash
ssh -D 8080 remote-host
```

## Only one address
```bash
ssh -L port_on_my_pc:server-hostname:host_port remote-host
```
for silent:
```bash
ssh -N -L 5006:127.0.0.1:5006 selfhosted@$timewebIp -p $timewebPort &
```
