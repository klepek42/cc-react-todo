import React from 'react';
import App from './App';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('App', () => {

        it('should render initial Todos', () => {
            render(<App/>);

            expect(screen.getByText('Startseite')).toBeDefined();

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

        it('should hide Todos with Show Todos button', () => {
            render(<App/>);

            const showTodosButton = screen.getByText('Hide Todos');
            expect(showTodosButton).toBeDefined();

            userEvent.click(showTodosButton);

            const hideTodosButton = screen.getByText('Show Todos');
            expect(hideTodosButton).toBeDefined();

            expect(screen.getByText('Startseite')).toBeDefined();

            expect(screen.queryByText('Lecker essen')).toBeNull();
            expect(screen.queryByText('Etwas sehr köstliches mit viel Käse und Bacon essen!')).toBeNull();
            expect(screen.queryByText('check-Lecker essen')).toBeNull();

            expect(screen.queryByText('React lernen')).toBeNull();
            expect(screen.queryByText('Ganz viel wichtige React Grundlagen erlernen.')).toBeNull();
            expect(screen.queryByText('check-React lernen')).toBeNull();

            expect(screen.queryByText('Kaffee trinken')).toBeNull();
            expect(screen.queryByText('Kaffee trinken um wach zu werden')).toBeNull();
            expect(screen.queryByText('check-Kaffee trinken')).toBeNull();
        });

    }
);

