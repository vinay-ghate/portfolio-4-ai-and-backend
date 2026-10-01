import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Modern Portfolio API',
      version: '1.0.0',
      description: 'API documentation for Vinay Ghate\'s AI & Backend Engineer Portfolio',
      contact: {
        name: 'Vinay Ghate',
        email: 'ghatevinay2@gmail.com',
        url: 'https://github.com/vinay-ghate'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      },
      {
        url: 'https://v1nay.is-a.dev',
        description: 'Production server'
      }
    ],
    components: {
      schemas: {
        PersonalInfo: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Vinay Ghate' },
            role: { type: 'string', example: 'AI & Backend Engineer' },
            bio: { type: 'string', example: 'Python AI engineer...' },
            email: { type: 'string', example: 'ghatevinay2@gmail.com' },
            phone: { type: 'string', example: '+91-8605078054' },
            github: { type: 'string', example: 'https://github.com/vinay-ghate' },
            linkedin: { type: 'string', example: 'https://linkedin.com/in/vinay-ghate' },
            location: { type: 'string', example: 'Pune, India' },
            avatarUrl: { type: 'string', example: '/images/profile.jpg' },
            resumeUrl: { type: 'string', example: 'https://v1nay.is-a.dev' }
          }
        },
        Experience: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            title: { type: 'string', example: 'System Engineer C1 (AI & Backend)' },
            company: { type: 'string', example: 'Tata Consultancy Services' },
            period: { type: 'string', example: 'Nov 2024 – Present' },
            description: {
              type: 'array',
              items: { type: 'string' },
              example: ['Working on Ticket Parsing...', 'Built LLM-powered pipeline...']
            }
          }
        },
        Project: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            title: { type: 'string', example: 'Shorol Notes' },
            description: { type: 'string', example: 'AI-Powered Note-Taking...' },
            techStack: {
              type: 'array',
              items: { type: 'string' },
              example: ['React', 'TypeScript', 'Node.js']
            },
            link: { type: 'string', example: 'https://github.com/...' }
          }
        },
        Skill: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            category: { type: 'string', example: 'Programming' },
            items: {
              type: 'array',
              items: { type: 'string' },
              example: ['Python', 'JavaScript', 'TypeScript']
            }
          }
        },
        Blog: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            title: { type: 'string', example: 'Building AI-Powered Document Understanding Systems' },
            description: { type: 'string', example: 'A comprehensive guide...' },
            thumbnail: { type: 'string', example: '/images/blog-document-ai.jpg' },
            externalLink: { type: 'string', example: 'https://medium.com/...' },
            platform: { type: 'string', example: 'Medium' },
            date: { type: 'string', example: '2024-12-15' },
            tags: {
              type: 'array',
              items: { type: 'string' },
              example: ['AI', 'Document AI', 'Machine Learning']
            }
          }
        }
      }
    }
  },
  apis: ['./server/routes.ts'], // Path to the API routes
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };