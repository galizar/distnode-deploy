import fastify from 'fastify';

import Recipe from './recipe.js';

const server = fastify();

server.get('/', (req, res) => {
	'Hello from Distributed Node.js';
});

server.get('/recipes/:id', async (req, reply) => {
	const recipe = new Recipe(req.params.id);
	await recipe.hydrate();
	return recipe;
});

server.listen({port: PORT, host: HOST}, (err, host) => {
	console.log(`Server running at ${host}`);
});
