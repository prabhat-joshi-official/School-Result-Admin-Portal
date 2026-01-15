import { useState } from 'react';
import supabase from '../config/supabase_client';

const ViewStudents = () => {
    return (
        <div>
            {/* Header Element */}
            <header>
                <p>MARKSY</p>
                <ul>
                    <li><a href='/dashboard'>Dashboard</a></li>
                    <li><a href='/add-students'>Add Students</a></li>
                    <li><a href='/view-students'>View Students</a></li>
                    <li><a href='/marks-entry'>Marks Entry</a></li>
                    <li><a href='/results'>Results</a></li>
                </ul>
            </header>
            
            {/* View Students Content */}
        </div>
    );
}

export default ViewStudents;