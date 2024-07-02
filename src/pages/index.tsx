import React from 'react';
import AgendaPage from './andenda';
import Menu from '@/components/menu/menu';

export default function Page() {
    return (
        <main>
            <Menu />
            <AgendaPage />
        </main>
    );
};