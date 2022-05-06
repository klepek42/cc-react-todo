import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {

        it('should render initial Todos', () => {
            render(<App/>);

            expect(screen.getByText('Startseite')).toBeDefined();
            expect(screen.getByText('Käse')).toBeDefined();

            expect(screen.getByText('Lecker essen')).toBeDefined();
            expect(screen.getByText('Etwas sehr köstliches mit viel Käse und Bacon essen!')).toBeDefined();
            expect(screen.getByTestId('check-Lecker essen')).not.toBeChecked();

            expect(screen.getByText('React lernen')).toBeDefined();
            expect(screen.getByText('Ganz viel wichtige React Grundlagen erlernen.')).toBeDefined();
            expect(screen.getByTestId('check-React lernen')).not.toBeChecked();

            expect(screen.getByText('Kaffee trinken')).toBeDefined();
            expect(screen.getByText('Kaffee trinken um wach zu werden')).toBeDefined();
            expect(screen.getByTestId('check-Kaffee trinken')).toBeChecked();
        });

    }
);

