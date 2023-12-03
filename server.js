const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const db = require('./db/connection');
