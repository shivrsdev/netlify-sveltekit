import { prisma } from "$lib/server/database";
import { redirect, type Actions, type ServerLoad } from "@sveltejs/kit";

export const actions = {
    woof: async () => {
        await prisma.dog.create({});

        throw redirect(302, '/');
    }
} satisfies Actions;

export const load: ServerLoad = async () => {
    const woofs = await prisma.dog.findMany({});

    return {
        woofCount: woofs.length
    };
}