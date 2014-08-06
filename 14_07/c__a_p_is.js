var c__a_p_is =
[
    [ "Legato C APIs", "c__a_p_is.html#apiList", null ],
    [ "Object-Oriented Design", "c__a_p_is.html#OOD", null ],
    [ "Opaque Types", "c__a_p_is.html#opaqueTypes", null ],
    [ "Basic Type and Constant Definitions", "c_basics.html", null ],
    [ "Command Line Arguments API", "c_args.html", null ],
    [ "Directory API", "c_dir.html", [
      [ "Creating Directories", "c_dir.html#c_dir_create", null ],
      [ "Removing Directories", "c_dir.html#c_dir_delete", null ],
      [ "Reading Directories", "c_dir.html#c_dir_read", null ]
    ] ],
    [ "Doubly Linked List API", "c_doubly_linked_list.html", [
      [ "Creating and Initializing Lists", "c_doubly_linked_list.html#dls_createList", null ],
      [ "Creating and Accessing Nodes", "c_doubly_linked_list.html#dls_createNode", null ],
      [ "Adding Links to a List", "c_doubly_linked_list.html#dls_add", null ],
      [ "Removing Links from a List", "c_doubly_linked_list.html#dls_remove", null ],
      [ "Accessing Links in a List", "c_doubly_linked_list.html#dls_peek", null ],
      [ "Swapping Links", "c_doubly_linked_list.html#dls_swap", null ],
      [ "Querying List Status", "c_doubly_linked_list.html#dls_query", null ],
      [ "Queues and Stacks", "c_doubly_linked_list.html#dls_fifo", null ],
      [ "Thread Safety and Re-Entrancy", "c_doubly_linked_list.html#dls_synch", null ]
    ] ],
    [ "Dynamic Memory Allocation API", "c_memory.html", [
      [ "Overview", "c_memory.html#mem_overview", null ],
      [ "Creating a Pool", "c_memory.html#mem_creating", null ],
      [ "Allocating From a Pool", "c_memory.html#mem_allocating", null ],
      [ "Releasing Back Into a Pool", "c_memory.html#mem_releasing", null ],
      [ "Reference Counting", "c_memory.html#mem_ref_counting", null ],
      [ "Destructors", "c_memory.html#mem_destructors", null ],
      [ "Statistics", "c_memory.html#mem_stats", null ],
      [ "Multi-Threading", "c_memory.html#mem_threading", null ],
      [ "Managing Pool Sizes", "c_memory.html#mem_pool_sizes", null ],
      [ "Sub-Pools", "c_memory.html#mem_sub_pools", null ]
    ] ],
    [ "Event Loop API", "c_event_loop.html", [
      [ "Deferred Function Calls", "c_event_loop.html#c_event_deferredFunctionCalls", null ],
      [ "Publish-Subscribe Events", "c_event_loop.html#c_event_publishSubscribe", null ],
      [ "Layered Publish-Subscribe Handlers", "c_event_loop.html#c_event_layeredPublishSubscribe", null ],
      [ "Working with File Descriptors", "c_event_loop.html#c_event_files", null ],
      [ "Dispatching Function Execution to Other Threads", "c_event_loop.html#c_event_dispatchingToOtherThreads", null ],
      [ "Event Reports Containing Reference-Counted Objects", "c_event_loop.html#c_event_reportingRefCountedObjects", null ],
      [ "Miscellaneous Multithreading Topics", "c_event_loop.html#c_event_miscThreadingTopics", null ],
      [ "Troubleshooting", "c_event_loop.html#c_event_troubleshooting", null ],
      [ "Integrating with Legacy POSIX Code", "c_event_loop.html#c_event_integratingLegacyPosix", null ]
    ] ],
    [ "File Locking API", "c_flock.html", [
      [ "Co-operative File Locking", "c_flock.html#c_flock_cooperative", null ],
      [ "Locking Files", "c_flock.html#c_flock_locks", null ],
      [ "Streams", "c_flock.html#c_flock_streams", null ],
      [ "Non-blocking", "c_flock.html#c_flock_nonblock", null ],
      [ "Multiple Threads", "c_flock.html#c_flock_threads", null ],
      [ "Replicating File Descriptors", "c_flock.html#c_flock_replicateFd", null ],
      [ "Limitations", "c_flock.html#c_flock_limitations", null ]
    ] ],
    [ "HashMap API", "c_hashmap.html", [
      [ "Creating a HashMap", "c_hashmap.html#c_hashmap_create", null ],
      [ "Adding key-value pairs", "c_hashmap.html#c_hashmap_insert", [
        [ "Tip", "c_hashmap.html#c_hashmap_tips", null ]
      ] ],
      [ "Iterating over a map", "c_hashmap.html#c_hashmap_iterating", null ],
      [ "Tracing a map", "c_hashmap.html#c_hashmap_tracing", null ]
    ] ],
    [ "Hex string API", "c_hex.html", [
      [ "Conversion", "c_hex.html#hex_conversion", null ]
    ] ],
    [ "Logging API", "c_logging.html", [
      [ "Logging Basics", "c_logging.html#c_log_logging", [
        [ "Levels", "c_logging.html#c_log_levels", null ],
        [ "Basic Logging", "c_logging.html#c_log_basic_logging", null ],
        [ "Conditional Logging", "c_logging.html#c_log_conditional_logging", null ],
        [ "Fatal Errors", "c_logging.html#c_log_loging_fatals", null ],
        [ "Tracing", "c_logging.html#c_log_tracing", null ],
        [ "Result Code Text", "c_logging.html#c_log_resultTxt", null ]
      ] ],
      [ "Log Controls", "c_logging.html#c_log_controlling", [
        [ "Log Control Tool", "c_logging.html#c_log_control_tool", null ],
        [ "Log Control Configuration Settings", "c_logging.html#c_log_control_config", null ],
        [ "Environment Variables", "c_logging.html#c_log_control_environment_vars", [
          [ "LE_LOG_LEVEL", "c_logging.html#c_log_control_env_level", null ],
          [ "LE_LOG_TRACE", "c_logging.html#c_log_control_env_trace", null ]
        ] ],
        [ "Programmatic Log Control", "c_logging.html#c_log_control_functions", null ]
      ] ],
      [ "Log Formats", "c_logging.html#c_log_format", null ]
    ] ],
    [ "Low-Level Messaging API", "c_messaging.html", [
      [ "Interaction Model", "c_messaging.html#c_messagingInteractionModel", null ],
      [ "Addressing", "c_messaging.html#c_messagingAddressing", null ],
      [ "Protocols", "c_messaging.html#c_messagingProtocols", null ],
      [ "Client Usage Model", "c_messaging.html#c_messagingClientUsage", [
        [ "Sending a Message", "c_messaging.html#c_messagingClientSending", null ],
        [ "Receiving a Non-Response Message", "c_messaging.html#c_messagingClientReceiving", null ],
        [ "Closing Sessions", "c_messaging.html#c_messagingClientClosing", null ],
        [ "Multithreading", "c_messaging.html#c_messagingClientMultithreading", null ],
        [ "Sample Code", "c_messaging.html#c_messagingClientExample", null ]
      ] ],
      [ "Server Usage Model", "c_messaging.html#c_messagingServerUsage", [
        [ "Processing Messages from Clients", "c_messaging.html#c_messagingServerProcessingMessages", null ],
        [ "Sending Non-Response Messages to Clients", "c_messaging.html#c_messagingServerSendingNonResponse", null ],
        [ "Cleaning up when Sessions Close", "c_messaging.html#c_messagingServerCleanUp", null ],
        [ "Removing Service", "c_messaging.html#c_messagingRemovingService", null ],
        [ "Multithreading", "c_messaging.html#c_messagingServerMultithreading", null ],
        [ "Sample Code", "c_messaging.html#c_messagingServerExample", null ]
      ] ],
      [ "Start Up Sequencing", "c_messaging.html#c_messagingStartUp", null ],
      [ "Memory Management", "c_messaging.html#c_messagingMemoryManagement", null ],
      [ "Security", "c_messaging.html#c_messagingSecurity", null ],
      [ "Client User ID Checking", "c_messaging.html#c_messagingClientUserIdChecking", null ],
      [ "Sending File Descriptors", "c_messaging.html#c_messagingSendingFileDescriptors", null ],
      [ "Troubleshooting", "c_messaging.html#c_messagingTroubleshooting", null ],
      [ "Future Enhancements", "c_messaging.html#c_messagingFutureEnhancements", null ],
      [ "Design Notes", "c_messaging.html#c_messagingDesignNotes", null ]
    ] ],
    [ "Mutex API", "c_mutex.html", [
      [ "Creating a Mutex", "c_mutex.html#c_mutex_create", null ],
      [ "Using a Mutex", "c_mutex.html#c_mutex_locking", [
        [ "Tip", "c_mutex.html#c_mutex_locking_tips", null ]
      ] ],
      [ "Deleting a Mutex", "c_mutex.html#c_mutex_delete", null ],
      [ "Diagnostics", "c_mutex.html#c_mutex_diagnostics", null ]
    ] ],
    [ "Path API", "c_path.html", [
      [ "Directory and Basename", "c_path.html#c_path_dirAndBasename", null ],
      [ "Thread Safety", "c_path.html#c_path_threads", null ]
    ] ],
    [ "Path Iterator API", "c_path_iter.html", [
      [ "Create a Path Iterator", "c_path_iter.html#c_pathIter_create", null ],
      [ "Iterating a Path", "c_path_iter.html#c_pathIter_iterate", null ],
      [ "Absolute versus Relative Paths", "c_path_iter.html#c_pathIter_absoluteRelative", null ],
      [ "Modifying Paths", "c_path_iter.html#c_pathIter_modifyPath", null ]
    ] ],
    [ "Print APIs", "c_print.html", null ],
    [ "Real-time Clock API", "c_clock.html", [
      [ "Getting/Setting Time", "c_clock.html#clk_time", null ],
      [ "Operations on Time Values", "c_clock.html#clk_values", null ],
      [ "Converting Time to Other Formats", "c_clock.html#clk_convert", null ]
    ] ],
    [ "Safe References API", "c_safe_ref.html", [
      [ "Create Safe Reference", "c_safe_ref.html#c_safeRef_create", null ],
      [ "Lookup Pointer", "c_safe_ref.html#c_safeRef_lookup", null ],
      [ "Delete Safe Reference", "c_safe_ref.html#c_safeRef_delete", null ],
      [ "Create Referece Map", "c_safe_ref.html#c_safeRef_map", null ],
      [ "Multithreading", "c_safe_ref.html#c_safeRef_multithreading", null ],
      [ "Sample Code", "c_safe_ref.html#c_safeRef_example", null ]
    ] ],
    [ "Semaphore API", "c_semaphore.html", [
      [ "Creating a Semaphore", "c_semaphore.html#create_semaphore", null ],
      [ "Using a Semaphore", "c_semaphore.html#use_semaphore", null ],
      [ "Deleting a Semaphore", "c_semaphore.html#delete_semaphore", null ],
      [ "Diagnostics", "c_semaphore.html#diagnostics_semaphore", null ]
    ] ],
    [ "Signals API", "c_signals.html", [
      [ "Introduction", "c_signals.html#c_signals_intro", null ],
      [ "Signal Event Handlers", "c_signals.html#c_signals_eventHandlers", null ],
      [ "Mixing Asynchronous Signal Handlers with Synchronous Signal Event Handlers", "c_signals.html#c_signals_mixedHandlers", null ],
      [ "Multi-Threading Support", "c_signals.html#c_signals_multiThread", null ],
      [ "Limitations and Warnings", "c_signals.html#c_signals_limitations", null ],
      [ "Blocking signals", "c_signals.html#c_signals_blocking", null ]
    ] ],
    [ "Singly Linked List API", "c_singly_linked_list.html", [
      [ "Creating and Initializing Lists", "c_singly_linked_list.html#sls_createList", null ],
      [ "Creating and Accessing Nodes", "c_singly_linked_list.html#sls_createNode", null ],
      [ "Adding Links to a List", "c_singly_linked_list.html#sls_add", null ],
      [ "Removing Links from a List", "c_singly_linked_list.html#sls_remove", null ],
      [ "Accessing Links in a List", "c_singly_linked_list.html#sls_peek", null ],
      [ "Querying List Status", "c_singly_linked_list.html#sls_query", null ],
      [ "Queues and Stacks", "c_singly_linked_list.html#sls_fifo", null ],
      [ "Thread Safety and Re-Entrancy", "c_singly_linked_list.html#sls_synch", null ]
    ] ],
    [ "Thread Control API", "c_threading.html", [
      [ "Creating a Thread", "c_threading.html#threadCreating", null ],
      [ "Terminating a Thread", "c_threading.html#threadTerminating", null ],
      [ "Joining", "c_threading.html#threadJoining", null ],
      [ "Thread-Local Data", "c_threading.html#threadLocalData", null ],
      [ "Thread Synchronization", "c_threading.html#threadSynchronization", null ],
      [ "Thread Destructors", "c_threading.html#threadDestructors", null ]
    ] ],
    [ "Timer API", "c_timer.html", [
      [ "Creating/Deleting Timer Objects", "c_timer.html#timer_objects", null ],
      [ "Using Timers", "c_timer.html#timer_usage", null ],
      [ "Fatal Errors", "c_timer.html#timer_errors", null ],
      [ "Troubleshooting", "c_timer.html#timer_troubleshooting", null ]
    ] ],
    [ "Unit Testing API", "c_test.html", [
      [ "Modes of Operation", "c_test.html#c_test_modes", null ],
      [ "Setting Up the Test Framework", "c_test.html#c_test_setup", null ],
      [ "Performing Tests", "c_test.html#c_test_testing", null ],
      [ "Exiting a Test Program", "c_test.html#c_test_exit", null ],
      [ "Test Results", "c_test.html#c_test_result", null ],
      [ "Multi-Threaded Tests", "c_test.html#c_test_multiThread", null ],
      [ "Multi-Process Tests", "c_test.html#c_test_multiProcess", null ]
    ] ],
    [ "UTF-8 String Handling API", "c_utf8.html", [
      [ "UTF-8 Encoding", "c_utf8.html#utf8_encoding", null ],
      [ "Copy and Append", "c_utf8.html#utf8_copy", null ],
      [ "Truncation", "c_utf8.html#utf8_trunc", null ],
      [ "String Lengths", "c_utf8.html#utf8_length", null ],
      [ "Checking UTF-8 Format", "c_utf8.html#utf8_format", null ]
    ] ]
];