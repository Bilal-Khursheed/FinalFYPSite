create database MID;

use mid;

create table doctor (
	CNIC varchar(20) PRIMARY KEY,
	F_Name  varchar(30) not null,
	L_Name  varchar(30) not null,
	Email varchar(30) not null,
	Phone_No varchar(30) ,
    Password  varchar(30) not null,
    Status  int(5) not null,
    Hospital  varchar(50) not null,
    Street varchar(100) ,
    City  varchar(30) ,
    State  varchar(30) not null,
    Country  varchar(30) not null,
    Zip_Code varchar(30)
);


create table Patient (
	CNIC varchar(20) PRIMARY KEY,
	F_Name  varchar(30) not null,
	L_Name  varchar(30) not null,
	Email varchar(30) not null,
    DOB varchar(30) not null,
	Phone_No varchar(30) ,
    Password  varchar(30) not null,
    Street varchar(100) ,
    City  varchar(30) ,
    State  varchar(30) not null,
    Country  varchar(30) not null,
    Zip_Code varchar(30)
);


create table Adminp (
	CNIC varchar(20) PRIMARY KEY,
	F_Name  varchar(30) not null,
	L_Name  varchar(30) not null,
	Email varchar(30) not null,
	Phone_No varchar(30) ,
    Password  varchar(30) not null,
    Street varchar(100) ,
    City  varchar(30) ,
    State  varchar(30) not null,
    Country  varchar(30) not null,
    Zip_Code varchar(30)
);

create table Report (
	Report_ID varchar(20) PRIMARY KEY,
	Dated varchar(30) not null,
    Time varchar(30) not null,
    Report_URL  varchar(200) not null,
	Doctor_ID varchar(20),
    Patient_ID varchar(20),
    constraint FK_Constraint_Doc foreign key (Doctor_ID) references mid.doctor(cnic),
    constraint FK_Constraint_Pat foreign key (Patient_ID) references mid.patient(cnic)
);