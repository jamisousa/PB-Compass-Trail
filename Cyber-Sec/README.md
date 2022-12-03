##### Cyber Security



Information Security x Cyber Security

**Information security** - protecting data from various kinds of threats (on the internet or physical threats)

**Cyber security** - deal specifically with protecting data from cyber threats that exist on the internet.



✔ CIA - the pillars of Cyber Security

**Confidentiality** - data is accessed by only those with the right permit (encryption, passwords, biometrics, 2FA, MFA

**Integrity** - data has no been tampered or altered in any way (hashign, checksums).

**Availability** - data and resources available to be accessed or shared (network access, server)

❌ DAD

Disclosure - data is accessed by non-authorized users (trojans, brute force, theft)

Alteration - data has been compromised or tampered with (malware, viruses, SQL injection)

Deniability - access to data and resources are blocked (denial of service attacks, ransomware)



Cookies

A cookie is a text file that is placed on the computer whenever a site is visited. It allows the website to keep track of the visit details and store preferences. as well as increasing speed on the next visit and match ads according to interests / preferences.



TCP/IP Protocol

**Transmission Control Protocol -** Divides data into smaller packets that are transmitted over the internet and then reassembled when destination is reached.

**IP -** Internet Protocol, responsible for the address of each packet so it is sent to the corret destination



The 4 layers

Datalink - protocols that operate on a link that connect hosts on a network

Internet / Networking - connect independent networks together

Transport - handles communication between hosts

Application -  standardizes data exchange for applications



Uses of TCP/IP

- Internet

- Emails

- Playing games

  

Concepts

**Black Hat** - Financial interests

**Grey Hat** - Black hat tactics for White hat objectives

**Hacktivists** - Hacking for a cause

**Insider Threat** - Saboteur

**Passive Reconnaissance** - the only non-illegal step, gathering basic information (e-mail addresses, phone numbers, social media accounts, physical locations)

**Active Reconnaissance** - searching for vulnerabilities and weaknesses (IP addresses, DNS servers, open ports, usernames, passwords, company software)

**Exploitation** - taking advantage of a vulnerability to gain access (phishing mail, social engineering, unpatched software, weak passwords, malware injection)

**Privilege Escalation** - increasing the control over the exploited target (creating accounts, network hijack, admin access)

**Establish Persistence** - ensuring continuous access even aftehr the breach has been discovered by the victim

**Attack Phase** - data extraction, data corruption, malware injection

**Cover Up** - avoiding detection (clear event logs, erasing command history, icmp tunnels)



WhoIs Query - ICANN

Everytime a domain is registered it is necessary to provide information (phone number, address, e-mail), that are added to WhoIs data.



Social Enginering

Exploiting human emotions and interactions to extract valuable information.

**Baiting** - lure the target to taking an unfavorable action

**Pretexting** - looking, acting or sounding the part

**Quid Pro Quo** - offering a service in exchange for information

**Phishing** - relies on creating a sense of excitement or panic in the target using e-mails



Bruteforce Attack - BFA

A trial and error against passwords, checking all possible key combinations by the use of automated software to generate a large number of consecutive guesses

- Prevention: strong passwords, restrict login attempts, enforce timeout



Phishing

The attempt of obtaining sensitive data by sending crafted emails to a potential victim whilst impersonating a known person. It relies on naivety, curiosity and fear.

E-mail - e-mails sent with malicious links are sent in mass to as many email addresses as possible

Spear - phishing attack directed at a very specific target

Whaling - attack directed against senior executives

Vishing - phishing attack by phone calls

Smishing - phishing attack by text messages

- Prevention: training, security alertness, anti-malware software

  

DoS / DDoS

When the server is knocked out due too many requests to handle by one or thousands of computers. It will flood servers and networks with useless traffic until it becomes inaccessible.

- Prevention / Combating attacks: overprovision bandwidth, creating DDoS playbooks, being in contact with DDoS specialists

  

Pings

Network command used to know if a particular service is online.



Man in the middle attack

When a hacker is able to place himself into two computers virtually, stealing or modifying the data being transfered between them.

Email Hijacking - attacker gains access to email accounts

Wifi Eavesdropping - hijacking a wifi connection

Session Hijacking - connection between a computer and a website



SQL Injection

SQL - Structured Query Language

The attacker executes malicious SQL commands in order to corrupt a database.

- Prevention / combating injections: limiting privileges, data sanitization, software patches



Malware

Software or program that has the intent of causing harm to data.

**Viruses & Worms** - malicious code written to alter the way a computer or a network operates. A virus requires an active host program or already infected system to run (typically attached to executable files, infected websites and flash drives), while a worm is self replicating and self propagating (spreading themselves via network connections or downloaded files).

**Trojans** - appear to be legitimate software, but cause harm behind the scenes. Can be a game, song or app, not being able to self replicate.

- Backdoor Trojan: allows a hacker unauthorized access to a system in order to control it
- Infostealer Trojan: steals data from the infected computer
- Trojan Downloader: can download and install new versions of malware onto a system
- Trojan DDoS: can conduct denial of service attacks against websites

**Adware** - a program that idsplays unwanted banner advertisements, often bundled within software that is installed.

**Spyware** - a form of adware that tracks web usage.

**Ransomware** - the hacker gains access to the victim’s computer files and lock out the victim. It usually works by phishing e-mails resulting in the data getting encrypted.

**Rootkits** - being activated even before the operating system boots, it is hardest malware to the detect and remove. It allows viruses to hide in plain sight by disguising them as real essential files.

**Browser Hijacker** - similar to adware, redirecting victims to specific pages.

**Rogue Security Software** - pretends to be a good program to remove malware but is in fact a malware itself, turning any real security software available.



Defenses

**Firewalls** - a security device that monitors incoming and outgoing network traffic. Firewalls can prevent access to certain websites and sending data outside of the network by:

- Packet filtering: checking all data passing through using a filter.
- Proxy service: acting as an intermediary between systems.
- Stateful inspection: tracking the state of a connection between systems

Hardware Firewall: can be a standalone or built into network devices like switches and routers

Software Firewall: can be a standalone application or part of a security application like anti-virus

**Encryption** - the process of making information hidden. It uses a key to make the information secretive, becoming a cipher (encrypted message). The decryption of information also uses a key to unlock the cipher and make it accessible again.

**Biometrics** - a security mechanism to authenticate and provice access based on the physical characteristics analysis. It can compare fingerprints, DNA, Retina, face, hands, voice, gestures, gait.

**Anti-virus** - software used to protect computers from malware. It will scan the source code of a file and compare with its dictionary. Operations:

- On access scanning: checking every fule or program that is opened
- Full system scan: make sure that the entire computer is free of viruses
- Heuristic methods: predicting a file to be a virus by studying its behavior

*Polymorphic virus: a virus that morphs or changes its code making it very difficult to be detected.

**2 Factor Authentication / Multifactor Authentication** - a user provides 2 authentication factors to verify who they ware, providing an additional layer of security.

- Knowledge factor: something the user knows, like a password
- Possession factor: something the user has, like a token or mobile device
- Inherence factor: something the user is (biometrics)

**Honeypots** - a computer system that is a decoy to lure cybercriminals, used to study attemps to gain unauthorized access.

- Production honeypot: placed inside a production network with real servers to act as a decoy, keeping hackers distracted while the real production servers are patched up
- Research honeypot: close analysis of how attackers develop and progress in order to learn how to protect systems against them

**DMZ** - Demilitarized Zone, a physical or logical subnetwork that separates a local network from other networks.

**Wireless Security** - prevention of unauthorized access using wireless networks.

- Wired Equivalent Privacy(WEP): very weak with 64-bit and 128-bit encryption keys. Passwords could be cracked in minutes, superseded by WPA in 2003

- Wi-Fi Protected Access (WPA): security improvement with 256-bit encryption keys, superseded by WPA2 in 2006

  

**Cyber Security Policy**

Written document that describes how an organization protects its virtual and physical data assets from threats.

- Assets that need to be protected

- What data can be accessed

- How is the data accessed

- How often passwords change

  

**Incident response plan**

Set of policies that are used to identify, contain and eliminate cyberattacks, allowing an organization to quickly detect and stop attacks and prevent other attacks in the future.



**Disaster recovery plan**

A plan that focuses on the restoration of critical systems after a disaster (such as fire, earthquake or cyber attacks).



**BYOD (bring your own device) Policy**

Describes how employees are able to use their own personal device to access company data in a safe and secure manner.

- Must address both the concerns of the company and the employees
- Must aim for a balance between security and ease of access
- Determine what kind of cmopany data will be accessible
- Determine what devices will be permitted and who will be allowed to use them
- State the right of the company to access, monitor and delete information from the employee owned devices
- Show how the company will protect the employee’s personal data



