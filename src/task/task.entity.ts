enum Status{
    PENDING = 'PENDING',
    IN_PROGRES = 'IN_PROGRES',
    DONE = 'DONE'
}

class task {
    id: string
    title: string
    description: string
    status: Status
}