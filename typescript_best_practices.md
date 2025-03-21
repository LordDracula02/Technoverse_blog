# TypeScript Best Practices and Professional Coding Standards

This document outlines the best TypeScript coding practices and professional standards followed in the software industry. These guidelines will help maintain code quality, readability, and scalability across projects.

## Table of Contents

1. [Naming Conventions](#naming-conventions)
2. [Type Annotations](#type-annotations)
3. [Code Formatting and Consistency](#code-formatting-and-consistency)
4. [Error Handling](#error-handling)
5. [Documentation](#documentation)
6. [TypeScript Configuration](#typescript-configuration)
7. [Code Organization](#code-organization)
8. [Performance Optimization](#performance-optimization)
9. [Testing](#testing)
10. [General Best Practices](#general-best-practices)

## Naming Conventions

- Use **camelCase** for variables, functions, and parameters
- Use **PascalCase** for classes, interfaces, types, and enums
- Use **UPPER_SNAKE_CASE** for constants
- Prefix boolean variables with "is", "has", or "should" (e.g., `isValid`, `hasAccess`)
- Use descriptive and meaningful names that clearly communicate purpose

```typescript
// Variable naming
let userName: string;
const MAX_RETRY_COUNT = 3;

// Function naming
function calculateTotalPrice(items: Item[]): number {
  return items.reduce((total, item) => total + item.price, 0);
}

// Type naming
interface UserProfile {
  id: number;
  name: string;
  email: string;
}

// Boolean naming
const isAuthenticated = true;
const hasPermission = checkPermission(user, resource);
```

## Type Annotations

- Avoid using `any` type whenever possible
- Define explicit return types for functions
- Use union types for variables that can have a limited set of values
- Leverage TypeScript's built-in utility types (e.g., `Partial<T>`, `Readonly<T>`, `Pick<T>`)
- Use type aliases and interfaces to create reusable type definitions

```typescript
// Avoid any type
// Bad
function processData(data: any): any {
  return data.map(item => item.value);
}

// Good
interface DataItem {
  value: number;
  label: string;
}

function processData(data: DataItem[]): number[] {
  return data.map(item => item.value);
}

// Union types for limited values
type Status = 'pending' | 'approved' | 'rejected';

// Using utility types
function updateUser(userId: number, userData: Partial<UserProfile>): void {
  // Update user with partial data
}
```

## Code Formatting and Consistency

- Use consistent indentation (2 or 4 spaces)
- Use tools like ESLint and Prettier to enforce code style
- Follow a consistent pattern for imports and exports
- Organize imports by groups (built-in, external, internal)
- Use consistent spacing around operators, after commas, and between blocks

```typescript
// Consistent import organization
// Built-in imports
import * as path from 'path';

// External library imports
import { Component } from 'react';
import axios from 'axios';

// Internal imports
import { UserService } from '../services/user-service';
import { formatDate } from '../utils/date-utils';
```

## Error Handling

- Use try-catch blocks for synchronous code
- Use async/await with try-catch for asynchronous operations
- Create custom error types for different error scenarios
- Provide meaningful error messages
- Avoid swallowing errors (empty catch blocks)

```typescript
// Proper error handling
try {
  const data = await fetchUserData(userId);
  processUserData(data);
} catch (error) {
  if (error instanceof NetworkError) {
    notifyUser('Network connection issue. Please try again.');
  } else if (error instanceof AuthorizationError) {
    redirectToLogin();
  } else {
    logger.error('Failed to fetch user data:', error);
    notifyUser('An unexpected error occurred.');
  }
}
```

## Documentation

- Use JSDoc comments for functions, classes, and interfaces
- Document parameters, return values, and thrown exceptions
- Include examples for complex functions
- Keep documentation up-to-date with code changes
- Document non-obvious behavior and edge cases

```typescript
/**
 * Calculates the total price of items after applying discounts.
 * 
 * @param {Item[]} items - The array of items to calculate total for
 * @param {Discount[]} discounts - Available discounts to apply
 * @param {boolean} [applyTax=true] - Whether to include tax in the calculation
 * @returns {number} The total price after discounts and tax
 * @throws {InvalidDiscountError} If any discount is invalid or expired
 * 
 * @example
 * const items = [{ id: 1, price: 10 }, { id: 2, price: 20 }];
 * const discounts = [{ type: 'percent', value: 10 }];
 * const total = calculateTotalWithDiscounts(items, discounts);
 */
function calculateTotalWithDiscounts(
  items: Item[],
  discounts: Discount[],
  applyTax = true
): number {
  // Implementation
}
```

## TypeScript Configuration

- Enable strict mode in `tsconfig.json`
- Configure appropriate compiler options based on project requirements
- Use consistent configuration across related projects
- Consider using project references for monorepos

```json
// Recommended tsconfig.json settings
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## Code Organization

- Follow the Single Responsibility Principle
- Organize code by feature or domain
- Keep files small and focused on a single concern
- Use barrel files (index.ts) to simplify imports
- Separate business logic from UI components

```typescript
// Example of a barrel file (index.ts)
export * from './user-service';
export * from './auth-service';
export * from './product-service';

// Usage in other files
import { UserService, AuthService } from '../services';
```

## Performance Optimization

- Avoid excessive re-renders in UI components
- Use memoization for expensive calculations
- Implement lazy loading for modules and components
- Optimize bundle size with code splitting
- Use appropriate data structures for operations

```typescript
// Memoization example
import { useMemo } from 'react';

function ProductList({ products, filter }) {
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      product.category === filter.category &&
      product.price <= filter.maxPrice
    );
  }, [products, filter.category, filter.maxPrice]);
  
  // Render filtered products
}
```

## Testing

- Write unit tests for business logic
- Use integration tests for component interactions
- Implement end-to-end tests for critical user flows
- Use TypeScript in test files
- Mock external dependencies

```typescript
// Example unit test with Jest
import { calculateDiscount } from './discount-utils';

describe('calculateDiscount', () => {
  it('applies percentage discount correctly', () => {
    const price = 100;
    const discount = { type: 'percentage', value: 20 };
    
    const result = calculateDiscount(price, discount);
    
    expect(result).toBe(80);
  });
  
  it('applies fixed amount discount correctly', () => {
    const price = 100;
    const discount = { type: 'fixed', value: 25 };
    
    const result = calculateDiscount(price, discount);
    
    expect(result).toBe(75);
  });
});
```

## General Best Practices

- Use `===` instead of `==` for equality comparisons
- Prefer `const` over `let` when variables won't be reassigned
- Avoid global variables and functions
- Use destructuring for cleaner code
- Prefer template literals over string concatenation
- Use async/await instead of raw promises
- Avoid excessive nesting of code blocks
- Keep functions small and focused
- Use pure functions where possible
- Prefer immutability

```typescript
// Destructuring and template literals
const { firstName, lastName, age } = user;
const greeting = `Hello, ${firstName} ${lastName}! You are ${age} years old.`;

// Async/await instead of raw promises
// Bad
fetchUserData(userId)
  .then(userData => {
    return fetchUserPosts(userData.id);
  })
  .then(posts => {
    displayUserPosts(posts);
  })
  .catch(error => {
    handleError(error);
  });

// Good
async function loadUserData(userId: number) {
  try {
    const userData = await fetchUserData(userId);
    const posts = await fetchUserPosts(userData.id);
    displayUserPosts(posts);
  } catch (error) {
    handleError(error);
  }
}
```

---

By following these TypeScript coding standards and best practices, you can write clean, maintainable, and robust code that is easier to understand, test, and extend. These guidelines help ensure consistency across codebases and facilitate collaboration among team members.
