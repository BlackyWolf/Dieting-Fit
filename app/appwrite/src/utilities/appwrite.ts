import { Account, Client } from 'appwrite';
import { APPWRITE_API_ENDPOINT, APPWRITE_PROJECT_ID } from '@/variables';

export const client = new Client()
    .setEndpoint(APPWRITE_API_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
